import * as cdk from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import {Construct} from 'constructs'

export class CdkStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		new s3.Bucket(this, 'PersonalWebsiteBucket', {
			bucketName: `personal-website-bucket-${cdk.Aws.ACCOUNT_ID}`,
			publicReadAccess: false,
			removalPolicy: cdk.RemovalPolicy.DESTROY,
			websiteIndexDocument: 'index.html',
			websiteErrorDocument: 'error.html'
		})
	}
}
