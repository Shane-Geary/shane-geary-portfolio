import * as cdk from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import {Construct} from 'constructs'

export class CdkStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		const bucket = new s3.Bucket(this, 'PersonalWebsiteBucket', {
			bucketName: `personal-website-bucket-${cdk.Aws.ACCOUNT_ID}`,
			publicReadAccess: true,
			blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
			removalPolicy: cdk.RemovalPolicy.DESTROY,
			websiteIndexDocument: 'index.html',
			websiteErrorDocument: 'error.html'
		})

		const distribution = new cloudfront.CloudFrontWebDistribution(
			this,
			'PersonalWebsiteDistribution',
			{
				originConfigs: [
					{
						s3OriginSource: {
							s3BucketSource: bucket
						},
						behaviors: [{isDefaultBehavior: true}]
					}
				]
			}
		)
	}
}
