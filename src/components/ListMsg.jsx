import React, { Component } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class ListMsg extends Component {
  render() {
    return (
        <Formik
        initialValues={{
            listTitle:'',
            listArr:[{name:'',value:''}]
        }}
        onSubmit={values =>
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            }, 500)
        }
    >
        {({values})=>(
            <Form>
                {/* List Title */}
                <div>
                    <label className='text-gray-500 mx-2'>List Title</label>
                    <Field
                        name='listTitle'
                        className='w-full border bg-gray-50 py-1.5 px-3'
                        type='text'
                    />
                </div>
                <FieldArray
                    name='listArr'
                    render={(arrayHelpers) => (
                        <div> 
                            {values.listArr && values.listArr.length>0 && values.listArr.map((a, ind) => (
                                <div className="grid grid-cols-12 my-2" key={ind}>
                                    <div className='col-span-9'>
                                    </div>
                                    {/* Remove Item */}
                                    <div className="col-span-2 text-end ">
                                        <button
                                            type='button'
                                            className='btn btn-sm btn-warning mr-2'
                                            onClick={()=>arrayHelpers.remove(ind)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} style={{color: "#6f1701",}} />
                                        </button>
                                    </div>
                                    <div className="col-span-12 flex justify-between gap-5">
                                        {/* Item name */}
                                        <div className="my-2 col-span-5">
                                            <label className='text-gray-500 mx-2'>Item Name</label>
                                            <Field
                                                name={`listArr[${ind}].name`}
                                                type='text'
                                                placeholder=''
                                                className='border rounded-md w-full py-1 px-3 bg-slate-50'
                                            ></Field>
                                        </div>
                                        {/* Item value */}
                                        <div className="my-2 col-span-5">
                                            <label className='text-gray-500 mx-2'>Item Value</label>
                                            <Field
                                                  name={`listArr[${ind}].value`}
                                                type='text'
                                                placeholder=''
                                                className='border rounded-md w-full py-1 px-3 bg-slate-50'
                                            ></Field>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            ))}
                            <div className='flex justify-between my-4 '>
                                {/* Add Items */}
                                <button
                                    className='border font-semibold text-sm mb-2 text-white bg-green-600 rounded-md text-center p-1'
                                    type='button'
                                    onClick={()=>arrayHelpers.push('')}
                                ><span className='text-lg font-semibold'>+</span>Add More Item</button>
                            </div>
                            
                            
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
