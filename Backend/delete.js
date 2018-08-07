import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
    const params = {
        TableName: "namad",
        // 'Key' defines the partition key and sort key of the item to be removed
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            rideId: event.pathParameters.id
        }
    };

    try {
        const result = await dynamoDbLib.call("delete", params);
        callback(null, success({
            status: true
        }));
    } catch (e) {
        callback(null, failure({
            status: false
        }));
    }
}