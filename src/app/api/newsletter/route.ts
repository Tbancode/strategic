import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(req: Request) {
  const { email, first_name, last_name, country_of_residence } =
    await req.json();

  try {
    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: first_name,
          LNAME: last_name,
          MMERGE6: country_of_residence,
        },
      }
    );

    return Response.json(res);
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ error: JSON.parse(error.response.text) });
  }
}
