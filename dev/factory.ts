//Padrão criacional

// Fábrica de envio de notificações
// EMAIL, SMS, etc...

interface Notificacao {
    enviar(destinatario: string,
        mensagem: string
    ): void;
}

//Produto concreto, realiza a implementação de Notificação

class NotificacaoEmail implements Notificacao{
    enviar(destinatario: string, mensagem: string): void {
        console.log(" ==== EMAIL ==== ");
        console.log("Destinatário: ", destinatario);
        console.log("Mensagem: ", mensagem);
        console.log("E-mail enviado com sucesso!");
    }
}

class NotificacaoSms implements Notificacao{
     enviar(destinatario: string, mensagem: string): void {
        console.log(" ==== SMS ==== ");
        console.log("Destinatário: ", destinatario);
        console.log("Mensagem: ", mensagem);
        console.log("SMS enviado com sucesso!");
    }
}

abstract class CriadorDeNotificacao{
    protected abstract criarNotificacao(): Notificacao;

    public enviarNotificacao(destinatario: string, mensagem: string): void{
        console.log("Preparando envio da notificação...");

        const notificacao = this.criarNotificacao();
        
        notificacao.enviar(destinatario, mensagem);
        console.log("Processo Finalizado!");

    }
}

//CRIADOR CONCRETO 

class criadorDeEmail extends CriadorDeNotificacao{
    protected criarNotificacao(): Notificacao {
        return new  NotificacaoEmail();
    }
}

class criadorSms extends CriadorDeNotificacao{
    protected criarNotificacao(): Notificacao {
        return new NotificacaoSms();
    }
}

type TipoDeNoticacao = 'EMAIL' | 'SMS'

function obterCriadorNotificacao(tipo: TipoDeNoticacao): CriadorDeNotificacao{
    switch(tipo){
        case 'EMAIL':
            return new criadorDeEmail();
        case 'SMS':
            return new criadorSms();
    }
}

const pessoa = obterCriadorNotificacao('EMAIL');
pessoa.enviarNotificacao('miguelrthur10@gmail.com', 'Olá');
