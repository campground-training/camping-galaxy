import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(
      ':self',
      [
        style({ opacity: 0 }),

        stagger('100ms', animate('300ms ease-in-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query('@*', animate('200ms ease-in-out', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);
