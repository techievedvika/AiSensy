import React from 'react';
import Papa from 'papaparse';
import {saveAs} from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const ExportCSV = ({data}) => {
    const handleExport = () => {
        let expData = [...data];
        const csv = Papa.unparse(expData);
        const csvBlob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        saveAs(csvBlob, "data.csv");
      };
  return (
    <div>
       <button 
        onClick={()=>handleExport()}
        className='text-3xl' 
        // className='bg-white p-2 text-center text-sm text-gray-500 font-medium hover:bg-[#0a474c] hover:text-white border border-gray-400 rounded-lg'
        >
          <FontAwesomeIcon style={{color:'#0a474c'}} icon={faFileArrowDown} />
        </button>
    </div>
  )
}

export default ExportCSV
