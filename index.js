const core = require('@actions/core');
const github = require('@actions/github');
const { ACCESS_TOKEN } = process.env

const main = async () => {
    try {
        const octokit = new github.GitHub(ACCESS_TOKEN)
        const payload = github.context.payload
        const label = payload.label.name
        const invitee_id = payload.issue.user.id
        const org = "EddieJaoudeCommunity"

        if (label === "bug") // or invite me to the organisation
        {
            await octokit.orgs.createInvitation({
                org,
                invitee_id
            })
            console.log("Successfully sent invitation")
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}
main()