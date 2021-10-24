const InputText = ({label,defaultValue,onChange,placeholder})=>{
    return <div class="form-floating">
    <label for="inputName">{label}</label>
    <input class="form-control" defaultValue={defaultValue} onChange={onChange} id="inputName" type="text" placeholder={placeholder} />
</div>

}

export default InputText;