import { getCustomRepository } from "typeorm";
import { ParticipantRole, IParticipant } from "../database/model/Participant";
import { IInterview } from "../database/model/Interview";
import ParticipantRepo from "../database/repository/ParticipantRepo";
import InterviewRepo from "../database/repository/InterviewRepo";

const seeder = async () => {
	const pRepo = getCustomRepository(ParticipantRepo);
	const iRepo = getCustomRepository(InterviewRepo);
	const participants: IParticipant[] = [
		{
			name: "Suraj Pasi",
			role: ParticipantRole.CANDIDATE,
			email: "surajsaroj15092001@gmail.com"
		},
		{
			name: "Suraj Saroj",
			role: ParticipantRole.CANDIDATE,
			email: "surajsaroj20010915@email.com"
		},
		{
			name: "Yuvraj Sahu",
			role: ParticipantRole.CANDIDATE,
			email: "yuvrajsahu@email.com"
		},
		{
			name: "Bipul Sharma",
			role: ParticipantRole.CANDIDATE,
			email: "bipulsharma@email.com"
		},
		{
			name: "Umang Shahu",
			role: ParticipantRole.CANDIDATE,
			email: "umangshahu@email.com"
		},
	
		{
			name: "Scaler",
			role: ParticipantRole.INTERVIEWER,
			email: "scaler@email.com"
		},
		{
			name: "Interviewbit",
			role: ParticipantRole.INTERVIEWER,
			email: "Interviewbit@email.com"
		},

		{
			name: "NITRR",
			role: ParticipantRole.INTERVIEWER,
			email: "nitrr@gmail.com"
		}
	];
	await pRepo.query("delete from participants");
	await iRepo.query("delete from interviews");
	await pRepo.save(participants);
};

export default seeder;
