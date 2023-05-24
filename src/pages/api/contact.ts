import { NextApiRequest, NextApiResponse } from 'next';
import { mailOptions, transporter } from '@/sections/contacts/nodemailer';

const CONTACT_MESSAGE_FIELDS: any = {
  name: 'Name',
  phone: 'Phone',
  email: 'Email',
};

const generateEmailContent = (data: any) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ''
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3>${CONTACT_MESSAGE_FIELDS[key]}</h3><p style='padding-bottom: 15px;' >${val}</p>`);
  }, '');

  return {
    subject: 'New Contact Message',
    text: stringData,
    html: `<html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit&display=swap"
      rel="stylesheet"
    />
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif !important;
      }
    </style>
  </head>
  <body>
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      class="container"
      style="
        border: 0;
        background: #F3F3F3;
        border-collapse: collapse !important;
      "
    >
      <tbody
      >
        <tr>
          <td style="padding: 50px 0">
            <center style="width: 100%">
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                  width: 90%;
                  max-width: 700px;
                  border-radius: 14px;
                  background: #ffffff;
                  border: 1px solid rgba(0, 0, 0, 0.06);
                  box-shadow: 0px 0px 250px -35px rgba(0, 3, 71, 0.04);
                "
              >
                <body>
                  <tr>
                    <td>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                            <td
                              style="
                                height: 6px;
                                width: 100%;
                                border-radius: 14px 14px 0 0;
                                background: linear-gradient(180deg, #FF6913 0%, #FF6913 100%);
                              "
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                            <td style="padding: 60px 50px">
                              <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                              >
                                <tbody>
                                  <tr>
                                    <td style="padding: 20px 0">
                                      <span
                                        style="
                                          font-size: 30px;
                                          font-weight: 600;
                                          line-height: 38px;
                                          /*color: var(--black);*/
                                          letter-spacing: 0.35px;
                                        "
                                      >
                                    New Contact Message
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                  ${htmlData}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </body>
              </table>
            </center>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`,
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data || !data.name || !data.phone || !data.email) {
      return res.status(400).send({ message: 'Bad request' });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      // @ts-ignore
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
