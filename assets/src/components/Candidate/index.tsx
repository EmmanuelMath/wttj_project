import { useUpdateCandidateStatus } from '../../hooks'

function CandidateCard({ candidate }: { candidate: Candidate }) {
  const mutation = useUpdateCandidateStatus()

  const handleStatusChange = (newStatus: string) => {
    mutation.mutate({ candidateId: candidate.id, status: newStatus })
  }

  return (
    <Card mb={10}>
      <Card.Body>
        {candidate.email}
        <select value={candidate.status} onChange={(e) => handleStatusChange(e.target.value)}>
          <option value="new">New</option>
          <option value="interview">Interview</option>
          <option value="hired">Hired</option>
          <option value="rejected">Rejected</option>
        </select>
      </Card.Body>
    </Card>
  )
}

export default CandidateCard
