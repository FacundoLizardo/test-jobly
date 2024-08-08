import React from 'react';
import {useToast} from "./use-toast.ts";
import {Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport} from "./toast.tsx";

export function Toaster() {
  const {toasts} = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({id, title, description, action, ...props}) {
        return (
          <Toast key={id}>
            <div className="grid gap-1">
              {title &&
                  <ToastTitle className={'w-full text-left'}>
                    {title}
                  </ToastTitle>
              }
              {description &&
                  <ToastDescription className={'w-full text-left'}>
                    {description}
                  </ToastDescription>
              }
            </div>
            {action}
            <ToastClose/>
          </Toast>
        );
      })}
      <ToastViewport/>
    </ToastProvider>
  );
}
