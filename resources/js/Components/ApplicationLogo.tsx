import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <img src="kreasitex_logo.png" style={{ height: '100px', width: "500px"}} className='bg-center object-cover' alt="" />
    );
}
