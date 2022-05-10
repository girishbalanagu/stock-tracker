import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {

    // const location = event.queryStringParameters.location || "home";

    console.log("Hello Angular World o(*ﾟ∇ﾟ)ﾉ");
    console.log(`\nHere is the event info: ${JSON.stringify(event)}`);
    console.log(`\nHere is the context info: ${JSON.stringify(context)}`);
    console.log(`\nHere is the context info: ${JSON.stringify(context)}`);
    console.log(`\nHere is the location: ${location}`);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
    };
};

export { handler };
