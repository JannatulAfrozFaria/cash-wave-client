
const Title = ({heading,subHeading,caption}) => {
    return (
        <div className='text-center mx-auto my-8' >
            <h3 className='md:w-1/3 mx-auto text-3xl text-blue-400 uppercase py-3'>{heading} </h3>
            <p className='md-w-4/5 mx-auto text-gray-400 uppercase text-lg' >{subHeading}</p>
            <p className='text-white text-lg' >{caption} </p>
        </div>
    );
};

export default Title;