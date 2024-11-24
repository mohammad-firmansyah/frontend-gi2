import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Container, FormHelperText, Grid2 } from "@mui/material"
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FormControl, FormLabel } from "@mui/joy"

type Inputs = {
    example: number
    exampleRequired: string
  }

enum GenderEnum {
female = "female",
male = "male",
other = "other",
}

interface IFormInput {
    firstName: string
    lastName: string
    age: number
    // iceCreamType: { label: string; value: string }
  }

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().integer().required()
}).required()

export const InputCustom = () => {
    const {control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })


    const onSubmit : SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container>

                <Grid2 container spacing={1} size={12}>

                    <Grid2 size={{sm:12,xs:12, md: 4}}>
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{required:true}}
                            render={({field,fieldState}) => (
                                <FormControl error={(!!fieldState.error)}>
                                    <FormLabel>First Name</FormLabel>
                                    <Input {...field}/>

                                    {(!errors.firstName?.message != undefined) ? <FormHelperText error>
                                        {errors.firstName?.message}
                                    </FormHelperText> : ""}
                                </FormControl>
                            )}
                        />
                    </Grid2>

                    <Grid2 size={{sm:12,xs:12, md: 4}}>
                    
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{required:true}}
                            render={({field,fieldState}) => (
                                <FormControl error={(!!fieldState.error)}>
                                    
                                    <FormLabel>Last Name</FormLabel>
                                    <Input {...field}/>
                                    {(!errors.lastName?.message != undefined) ? <FormHelperText error>
                                        {errors.lastName?.message}
                                    </FormHelperText> : ""}
                                    
                                </FormControl>
                            )}
                        />

                        {/* <p style={{color:'red'}}>{errors.lastName?.message}</p> */}
                    </Grid2>
                   
                    <Grid2 size={{sm:12,xs:12, md: 4}}>
                    
                        <Controller
                            name="age"
                            control={control}
                            rules={{required:true}}
                            render={({field,fieldState}) => (
                                <FormControl error={(!!fieldState.error)}>
                                    
                                    <FormLabel>Age</FormLabel>
                                    <Input {...field}/>
                                    {(!errors.age?.message != undefined) ? <FormHelperText error>
                                        {errors.age?.message}
                                    </FormHelperText> : ""}
                                </FormControl>
                            )}
                        />
                        {/* <p style={{color:'red'}}>{errors.age?.message}</p> */}
                    </Grid2>

                {/* <Grid2 size={3}>

                        <Controller
                            name="iceCreamType"
                            control={control}
                            render={({field}) => (
                                <Select
                                {...field}
                                options={[
                                    {value: "choco3",label:  "Choco"},
                                    {value: "choco2",label:  "Choco2"},
                                    {value: "choco1",label:  "Choc3"},
                                ]}/>
                            )}
                        />
                </Grid2> */}
                <Grid2 size={12}>
                <Button type="submit" style={{width:"100%"}}>Submit</Button>
                </Grid2>
                </Grid2>
            </Container>
           
        </form>
    )
}