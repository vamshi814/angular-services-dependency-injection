

export class LoggerService {

    LogMessage(name: string, status: string) {
        console.log(`New User with name ${name} with status ${status} has been added.`);
    }

}