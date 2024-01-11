import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const FilterForm = () => {
    let optArr = ['Yes','No','All'];
    const atrValues = ['']
    const handleSubmit = ()=>{

    }
  return (
    <div>
        <Formik
            initialValues={{
                startDate:'',
                endDate:'',
                opted:'',
                incoming:'',
                // attributes:[],
            }}
            onSubmit={values =>
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                }, 500)
            }
        >
            {(values)=>(
                <Form>
                    {/* Start Date */}
                    <div className='me-10 my-2 mt-10 mx-2'>
                        <div className='flex gap-5  '>
                            <label className='mt-1 text-[16px]  text-slate-500 fon'>Start Date</label>
                            <Field type='date' name='startDate' className='border rounded px-2.5 py-1'/>
                        </div>
                        
                    </div>
                    {/* End Date */}
                    <div className='me-10 my-2 mt-10 mx-2'>
                        <div className='flex gap-5  '>
                            <label className='mt-1 text-[16px]  text-slate-500 fon'>End Date</label>
                            <Field type='date' name='endDate' className='border rounded px-2.5 py-1'/>
                        </div>           
                    </div>
                    
                    {/* Opted In */}
                    <div className='me-10 my-2 mt-10 mx-2'>
                        <div className='  '>
                            <label className='mt-1 text-[16px] fon'>
                                Opted In
                                <FontAwesomeIcon
                                className="mx-1.5 text-sm"
                                icon={faCircleExclamation}
                                style={{ color: "#d7dae0" }}
                            />
                            </label>
                           <div className='flex gap-10 my-2'>
                            {optArr.map((a)=>(
                                <div className='flex' key={a}>
                                    <Field name='opted' type='radio' className='border' value={a}/>
                                    <label className='text-sm mx-2'>{a}</label>
                                </div>
                            ))}
                           </div>
                        </div>           
                    </div>
                    {/* Incoming Blocked */}
                    <div className='me-10 my-2 mt-10 mx-2'>
                        <div className='  '>
                            <label className='mt-1 text-[16px] fon'>
                                Incoming Blocked
                                <FontAwesomeIcon
                                className="mx-1.5 text-sm"
                                icon={faCircleExclamation}
                                style={{ color: "#d7dae0" }}
                            />
                            </label>
                           <div className='flex gap-10 my-2'>
                            {optArr.map((a)=>(
                                <div className='flex' key={a}>
                                    <Field name='incoming' type='radio' className='border' value={a}/>
                                    <label className='text-sm mx-2'>{a}</label>
                                </div>
                            ))}
                           </div>
                        </div>           
                    </div>
                    {/* Attributes */}
                    {/* Submit */}
                    <button className='m-3 my-8 bg-[#0a474c] text-white text-center p-1.5 px-2 text-sm rounded-md py-2 hover:opacity-85'>Apply Changes</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default FilterForm
