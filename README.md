# static-website
static s3 website with pulumi and cloudflare

## bootstrap

```
aws s3 mb s3://kb-static-website-pulumi-backend
```

```
pulumi login s3://knip-builds-pulumi-backend
```


```
pulumi new typescript --name kb-static-website
```

Refs:
- https://www.pulumi.com/registry/packages/aws/how-to-guides/s3-website/
