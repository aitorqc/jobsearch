import React from 'react'

import {Data as jobs} from '../../Data.js';
import Card from './Card';

export default function Jobs() {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {
                    jobs.map((item)=> (
                        < Card key={item.id} item={item} />
                    )) 
                }
            </div>
        </div>
    )
}
