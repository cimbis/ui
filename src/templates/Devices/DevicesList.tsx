import { useContext, useEffect } from 'react';

import { Table } from '../../components/Table/Table.tsx';
import { THead } from '../../components/Table/THead.tsx';
import { TBody } from '../../components/Table/TBody.tsx';
import { TR } from '../../components/Table/TR.tsx';
import { TH } from '../../components/Table/TH.tsx';
import { TD } from '../../components/Table/TD.tsx';

import { DeviceContext } from '../../Context/DeviceContext.tsx';
import { DevicesViewContext } from '../../Context/DevicesViewContext.tsx';

import './DevicesList.css';
import { Link } from 'react-router-dom';

export const DevicesList = () => {
    const deviceContext = useContext(DeviceContext);
    const { setListView } = useContext(DevicesViewContext);

    useEffect(() => {
        setListView();
    }, [setListView]);

    return (
        <div>
            <Table>
                <THead>
                    <TR>
                        <TH scope="col" className="ui first-table-column"></TH>
                        <TH scope="col">Product line</TH>
                        <TH scope="col">Name</TH>
                    </TR>
                </THead>
                <TBody>
                    {[...Array(deviceContext)].map((_, index) => {
                        return (
                            <TR
                                key={`strictly-unique-key-based-on-index-that-will-never-change-${index}`}
                            >
                                <TD></TD>
                                <TD>
                                    <Link to={`/device/${index}`}>A product</Link>
                                </TD>
                                <TD>It's name</TD>
                            </TR>
                        );
                    })}
                </TBody>
            </Table>
        </div>
    );
};
