import { useSelector } from 'react-redux';

const AdminPlanAula = () => {

    const { currentUser } = useSelector((state) => state.user);
    return (
        <div>
            Matéria: {currentUser.name}
            <br />
            Tema: {currentUser.email}
            <br />
            Objetivo: {currentUser.schoolName}
            <br />
        </div>
    )
}
export default AdminPlanAula
