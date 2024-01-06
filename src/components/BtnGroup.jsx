import React, { Component } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class BtnGroup extends Component {
  render() {
    return (
        <Formik
                    initialValues={{
                        btns:[' ']
                    }}
                    onSubmit={values =>
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        }, 500)
                    }
                >
                    {({values})=>(
                        <Form>
                            <FieldArray
                                name='btns'
                                render={(arrayHelpers) => (
                                    <div>
                                        <div className='flex justify-end my-4 mt-6'>
                                            <button
                                                className='border font-semibold text-sm mb-2 text-white bg-green-600 rounded-md text-center p-1'
                                                type='button'
                                                onClick={()=>arrayHelpers.push('')}
                                            ><span className='text-lg font-semibold'>+</span>Add Button</button>
                                        </div>
                                        {values.btns && values.btns.length>0 && values.btns.map((a, ind) => (
                                            <div className="grid grid-cols-12 my-2" key={ind}>
                                                <div className='col-span-9'>
                                                    <label className='text-gray-500 mx-2'>Button {ind+1}</label>
                                                </div>
                                                <div className="col-span-2 text-end ">
                                                    <button
                                                        type='button'
                                                        className='btn btn-sm btn-warning mr-2'
                                                        onClick={()=>arrayHelpers.remove(ind)}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} style={{color: "#6f1701",}} />
                                                    </button>
                                                </div>
                                                <div className="col-span-12">
                                                    <div className="my-2">
                                                        <Field
                                                            name={`btns.${ind}]`}
                                                            type='text'
                                                            placeholder=''
                                                            className='border rounded-md w-full py-1 px-3 bg-slate-50'
                                                        ></Field>
                                                    </div>
                                                   
                                                </div>
                                                
                                            </div>
                                        ))}
                                        
                                        
                                    </div>    
                                )}    
                                >
                            </FieldArray>
                        </Form>
                    )}
                </Formik>
    )
  }
}

