//https://playcode.io/rxjs
import { Observable } from "rxjs";

export function RxjsTuto() {
  // Criando um Observable que emite números de 1 a 3 a cada segundo
  const observable = new Observable((observer) => {
    let count = 1;
    const interval = setInterval(() => {
      observer.next(count++);
      if (count == 2) {
        observer.dual();
      }
      if (count > 3) {
        clearInterval(interval);
        observer.complete();
      }
    }, 1000);
  });

  // Observador que imprime os valores recebidos
  const observer = {
    next: (value) => console.log(value),
    error: (error) => console.error(error),
    dual: () => console.log("quase no final"),
    complete: () => console.log("Concluído"),
  };

  // Assinando o Observable com o Observador
  observable.subscribe(observer);
}

export function subscriberAnonimo() {
  const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  console.log("just before subscribe");
  observable.subscribe({
    next(x) {
      console.log("got value " + x);
    },
    error(err) {
      console.error("something wrong occurred: " + err);
    },
    complete() {
      console.log("done");
    },
  });
  console.log("just after subscribe");
}

//RxjsTuto();
subscriberAnonimo();