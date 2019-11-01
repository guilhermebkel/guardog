import PingJob from "boot/cron/jobs/Ping"

export default [
	{
		function: PingJob,
		due: "* * * * *"
	}
]
