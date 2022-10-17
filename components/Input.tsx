import { createRef, FC, memo, useEffect } from 'react'
import InputComponentData from '@/types/Input.types';

const Input: FC<InputComponentData> = memo(({ data, value, hasError, errorMessage, eventFocus, eventKeyPress, eventBlurPress, listenIcon }: InputComponentData)  => {
  const inputRef = createRef();

  useEffect(() => {
    (inputRef.current as any).info = {
      label: data.label || '',
      name: data.name || '',
      type: data.type || '',
      typeButton: data.typeButton || '',
      maxlength: data.maxlength || '',
      onPaste: data.onPaste,
      placeholder: data.placeholder || '',
      autocomplete: data.autocomplete || '',
      disabled: data.disabled,
      alphanumeric: data.alphanumeric,
      alphabetical: data.alphabetical,
      onlyNumbers: data.onlyNumbers,
      upperCase: data.upperCase,
      pattern: data.pattern || '',
      mask: data.mask || ""
    }
  },[data]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (inputRef.current as any).value = value;
  },[value]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (inputRef.current as any).hasError = hasError;
    (inputRef.current as any).errorMessage = errorMessage;
  },[hasError, errorMessage]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (inputRef.current as any).addEventListener('eventFocus', eventFocus);
    (inputRef.current as any).addEventListener('eventKeyPress', eventKeyPress);
    (inputRef.current as any).addEventListener('eventBlurPress', eventBlurPress);
    (inputRef.current as any).addEventListener('listenIcon', listenIcon);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-input ref={inputRef}></lottus-input>
});

export default Input;
