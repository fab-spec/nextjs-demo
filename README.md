# Next.js 💎 FAB 💎 Cloudflare Workers

Prerequisites:

* Cloudflare account with Workers enabled:
  * Account ID
  * Email
  * API KEY
* AWS account (key, secret) with an IAM role allowing S3 bucket creation:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "CreateFabDeployBuckets",
            "Action": [
                "s3:*"
            ],
            "Effect": "Allow",
            "Resource": [
                "arn:aws:s3:::fab-assets-*",
                "arn:aws:s3:::fab-assets-*/*"
            ]
        }
    ]
}
```

The above account will be able to do _anything_ to your S3 buckets that start with the name `fab-assets-`. That seems like a good copy-paste first cut at an IAM role, but you're welcome to lock things down further.
