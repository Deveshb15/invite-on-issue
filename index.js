const core = require('@actions/core');
const github = require('@actions/github');
const { ACCESS_TOKEN } = process.env

const main = async () => {
    try {
        const octokit = new github.GitHub(ACCESS_TOKEN)

        const payload = github.context.payload
        const invitee_id = payload.issue.user.id
        const currentLabel = payload.label.name

        const org = core.getInput('organization', { required: true })
        const label = core.getInput('label', { required: true })

        if (currentLabel === label) {
            console.log('testing, both are same. Invitation can be sent')
            console.log(invitee_id, org)
            console.log("label:", label, "invite:", invitee_id)
            // await octokit.orgs.createInvitation({
            //     org,
            //     invitee_id
            // })
            // console.log("Successfully sent invitation")
        }

    } catch (error) {
        core.setFailed(error.message);
    }
}
main()
