import  React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export default function PaginateTable({ rows, columns, selected, change }) {
    return (
        <div style={{ height: 400, width: '89.5%' }}  >
            <DataGrid 
                className="bg-white"
                pageSize = { 5 } 
                rows     = { rows }  
                columns  = { columns } 
                onSelectionChange = { change }
                checkboxSelection = { selected }
            />
        </div>
    );
}

export const GetRowCurrent =  params => {

    const fields =  params.api.getAllColumns().map((c) => c.field).filter((c) => c !== "__check__" && !!c);
    const thisRow = {};

    fields.forEach((f) => {
      thisRow[f] = params.getValue(f);
    });

    return thisRow
} ;