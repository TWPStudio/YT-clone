


export function Input({placeholder, className, register, name, type}) {
  return (
    <input 
    placeholder={placeholder}
    autoComplete="off"
    type={type}
    className={className ? className : ''}
    {...register('email')} />
  )
}