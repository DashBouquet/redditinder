declare module 'react-native-swipe-cards' {
  function SwipeCards():any;
  export = SwipeCards;
}


declare module 'recompose/compose' {
  function hoc(component: any): any;
  export default (...hocs: any[]) => hoc;
}

declare module 'recompose/lifecycle' {
  function lifecycle(obj: any, obj2? : any):any;
  export = lifecycle;
}

declare module 'recompose/withState' {
  function withState(obj: any, obj2?: any, obj3?: any):any;
  export = withState;
}

declare module 'recompose/branch' {
  function branch(obj: any, obj2?: any, obj3?: any):any;
  export = branch;
}

declare module 'recompose/renderComponent' {
  function renderComponent(obj: any):any;
  export = renderComponent;
}


declare module 'recompose/withHandlers' {
  function withHandlers(obj: any, obj2? : any):any;
  export = withHandlers;
}