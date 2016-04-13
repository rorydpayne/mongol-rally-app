read -r -p "Are you sure? [y/N] " confirmation
case $confirmation in
    [yY][eE][sS]|[yY])
        ;;
    *)
        echo "Not sure, Ok Goodbye!"
        exit
        ;;
esac


cd app

# Run unit tests
activator test

# Build the docker image
sbt docker:stage

# Copy Dockerfile and Dockerrun.aws.json to target/docker
cd ../scripts/deployment
cp Dockerfile Dockerrun.aws.json ../../app/target/docker

# Zip the files
cd ../../app/target/docker
zip -r $GIT_COMMIT.zip *

# -- AWS --
# Upload the image
aws s3api put-object --bucket my_bucket --key $GIT_COMMIT --body $GIT_COMMIT.zip

# Create a new application version
aws elasticbeanstalk create-application-version --application-name "myapp" --version-label $GIT_COMMIT --source-bundle S3Bucket=my_bucket,S3Key=$GIT_COMMIT

# Deploy the image
aws elasticbeanstalk update-environment --environment-name myapp-env --version-label $GIT_COMMIT