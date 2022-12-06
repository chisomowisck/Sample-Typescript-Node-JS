import { SessionRepository } from "../entity/Session";

export const session = async (recipientPhone: string) => {

  let session = await SessionRepository().findOneBy({ id: recipientPhone });

  const sessionData = {
    id: recipientPhone,
    level: 1,
  };

  if (session) {
    session.level = 8;
    session =await SessionRepository().save(session);
  } else {
    SessionRepository().create(sessionData);
    session = await SessionRepository().save(sessionData);
  }

  return session;

};
