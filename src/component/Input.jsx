import { useRef, useEffect } from "react";
function Input(props) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input ref={inputRef} className="input" {...props} />;
}
export default Input;
