import '../../src/styles/Project.module.scss';
const Project = () => {
  return (
    <div className="card overflow-hidden h-[15em] w-[30em] bg-[url('../../public/images/chaletsetcaviar.png')] bg-cover bg-no-repeat bg-center ease-out rounded-3xl hover:bg-none hover:bg-slate-200 hover:text-gray-700">
      <div className='border'>
        <h2 className='title'>Al Pacino</h2>
        <div className='icons'>
          <i className='fa fa-codepen' aria-hidden='true'></i>
          <i className='fa fa-instagram' aria-hidden='true'></i>
          <i className='fa fa-dribbble' aria-hidden='true'></i>
          <i className='fa fa-twitter' aria-hidden='true'></i>
          <i className='fa fa-facebook' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  );
};

export default Project;
