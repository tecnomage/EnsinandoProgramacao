//https://stackblitz.com/run?devtoolsheight=50&file=index.ts
import { fromEvent, map } from 'rxjs';

const clicks = fromEvent<PointerEvent>(document, 'click');
const positions = clicks.pipe(map(ev => ev.clientX));

positions.subscribe(x => console.log(x));

// fromEvent
// Creates an Observable that emits events of a specific type coming from the given event target.