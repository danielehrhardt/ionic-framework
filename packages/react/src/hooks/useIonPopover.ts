import { PopoverOptions, popoverController } from '@ionic/core';

import { HookOverlayOptions } from './HookOverlayOptions';
import { useOverlay } from './useOverlay';

/**
 * A hook for presenting/dismissing an IonPicker component
 * @param component - The component that the popover will show. Can be a React Component, a functional component, or a JSX Element
 * @param componentProps - The props that will be passed to the component, if required
 * @returns - Returns the present and dismiss methods in an array
 */
export function useIonPopover(component: JSX.Element, componentProps?: any): UseIonPopoverResult {
  const controller = useOverlay<PopoverOptions, HTMLIonPopoverElement>(
    'IonPopover',
    popoverController,
    component,
    componentProps
  );

  function present(options: Omit<PopoverOptions, 'component' | 'componentProps'> & HookOverlayOptions = {}) {
    controller.present(options as any);
  };

  return [
    present,
    controller.dismiss
  ];
}

type UseIonPopoverResult = [
  (options?: Omit<PopoverOptions, 'component' | 'componentProps'> & HookOverlayOptions) => void,
  /**
   * Dismisses the popover
   */
  () => void
];