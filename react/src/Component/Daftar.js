import * as React from 'react'
import InputEmail from './Form/InputEmail'
import InputText from './Form/InputText'
import InputNumber from './Form/InputNumber'
import InputPassword from './Form/InputPassword'

const Register = ()=>{
    const [form,setForm] = React.useState({
        Nama:'',
        Email:'',
        Username:'',
        Experience:'',
        Level:0,
        Password:null,
        ConfirmPassword:null
    })
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(!form.Nama && !form.Email && !form.Username && !form.Experience &&
            !form.Level && !form.Paassword && !form.ConfirmPassword){
                alert('Tolong Di isi Terlebih Dahulu')
            } else {
                alert('Berhasil Di Register!')
            }
    }

    return <div className="container">
            <h1 className='text-center mt-5'>Daftar</h1>
            <form onSubmit={handleSubmit}>
                <InputText label='Nama' placeholder='Masukan nama...' defaultValue={form.Nama} onChange={(e)=>setForm({...form, Nama:e.target.value})}/>
                <InputEmail label='Email' defaultValue={form.Email} onChange={(e)=>setForm({...form, Email:e.target.value})}/>
                <InputText label='Username' placeholder='Masukan id...' defaultValue={form.Username} onChange={(e)=>setForm({...form, Username:e.target.value})}/>
                <InputText label='Experience' placeholder='Pilih salah satu level Master, Mid or Beginner ' defaultValue={form.Experience} onChange={(e)=>setForm({...form, Experience:e.target.value})}/>
                <InputNumber label='Level' defaultValue={form.Level} onChange={(e)=>setForm({...form, Level:e.target.value})}/>
                <InputPassword label='Password' defaultValue={form.Password} onChange={(e)=>setForm({...form, Password:e.target.value})}/>
                <InputPassword label='Confirm Password' defaultValue={form.ConfirmPassword} onChange={(e)=>setForm({...form, ConfirmPassword:e.target.value})}/>

                <button className='btn btn-dark btn-xl mt-3'>Daftar</button>
            </form>

    </div>
}

export default Register;