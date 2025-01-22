import { useUpdateCandidateStatus } from '../hooks'

interface Props {
    candidateId: number
    currentStatus: string
}

const CandidateStatusDropdown: React.FC<Props> = ({ candidateId, currentStatus }) => {
    const mutation = useUpdateCandidateStatus()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        mutation.mutate({ candidateId, status: e.target.value })
    }

    return (
        <select value={currentStatus} onChange={handleChange}>
            <option value="new">New</option>
            <option value="interview">Interview</option>
            <option value="hired">Hired</option>
            <option value="rejected">Rejected</option>
        </select>
    )
}

export default CandidateStatusDropdown
