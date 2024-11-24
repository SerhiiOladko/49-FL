import MyButton from "../../components/myButton/MyButton";

export default function Lesson07() {
  // * функции

  // * тип параметра функции указывается через двоеточие в круглых скобках
  // * тип возвращенного значения указывается после круглых скобок
  // const showMessage = (message: string):string => {
  //   console.log(`message: ${message}`)
  //   return `message: ${message}`
  // }
  // * если у функции нет возвращаемого значения - она возвращает тип void
  const showMessage = (message: string): void => {
    console.log(`message: ${message}`);
  };

  //showMessage('hello!');

  const sum = (a: number, b: number): number => a + b;

  const sumToString = (a: number, b: number): string => String(a + b);

  const result1: string = sumToString(10, 20);
  const result: number = sum(42, 100);

  // * any
  // ! тип который мы используем только в крайних случаях, а лучше не используем вовсе

  // по сути мы говорим, что someVar может быть любым типом данных, что не поможет нам в дальнейшем при возможной ошибки
  const someVar: any = 'hello';

  // * union type
  // оператор предполагающий что у данного значения может быть выбор из нескольких типов

  // эта переменны может быть и строкой и числом, но с ней в дальнейшем будет сложнее работать, потому что TS будет просить больше проверок - число это или строка?
  let stringOrNumber: string | number = 42;

  // пример union типа с конкретными значениями строк
  type ButtonType = 'button' | 'reset' | 'submit';

  let buttonType: ButtonType = "submit";

  // * типизация объектов через type

  // типизируя объект мы можем указать необязательный ключ для объекта через символ '?'

  type Animal = {
    name: string
    sound(): void
    hasOwner?: boolean
  }

  type Dog = Animal & {
    breed: string
  }

  const dog: Dog = {
    name: 'Johny',
    sound() {
      console.log('woof!')
    },
    breed: 'labrador'
  }

  // мы можем добавить кошке hasOwner которого не было у собаки за счет необязательного ключа в типе
  const cat: Animal = {
    name: 'Johny',
    sound() {
      console.log('woof!')
    },
    hasOwner:true,
    // owner: 'Peter' // добавить ключ которого нет в типе объекта мы не можем
  }

  dog.sound()


  // * generics type

  // function makeArray(first:number, second:number):number[] {
  //   return [first, second]
  // }

  function makeArray<T>(first:T, second:T):T[] {
    return [first, second]
  }

  const arr1:number[] = makeArray<number>(42, 100)

  const arr2:string[] = makeArray<string>('apple', 'orange')



  return (
    <div className="lesson-container">
      <h2>Lesson 07</h2>
      <p>React TypeScript part 2</p>
      <MyButton text="TypeScript button"/>
    </div>
  );
}

