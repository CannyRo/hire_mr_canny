'use client';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

export function TableContent(props){
    const rows = props.rows;
    const columns = props.columns;
    const commentary = props.commentary;
    return(
        <div className="container flex justify-center px-2 pt-20 sm:px-0">
            <div className="flex flex-col w-full max-w-5xl sm:px-6">
                <Table aria-label="Next session dates" selectionMode="single" >
                    <TableHeader columns={columns}>
                        {(column)=> <TableColumn>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey)=> <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <p className="text-xs mb-8 px-6">{commentary}</p>
            </div>
        </div>
        
    );
}