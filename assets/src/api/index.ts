type Job = {
  id: string
  name: string
}

export type Candidate = {
  id: number
  email: string
  status: 'new' | 'interview' | 'hired' | 'rejected'
  position: number
}

export const getJobs = async (): Promise<Job[]> => {
  const response = await fetch(`http://localhost:4000/api/jobs`)
  const { data } = await response.json()
  return data
}

export const getJob = async (jobId?: string): Promise<Job | null> => {
  if (!jobId) return null
  const response = await fetch(`http://localhost:4000/api/jobs/${jobId}`)
  const { data } = await response.json()
  return data
}

export const getCandidates = async (jobId?: string): Promise<Candidate[]> => {
  if (!jobId) return []
  const response = await fetch(`http://localhost:4000/api/jobs/${jobId}/candidates`)
  const { data } = await response.json()
  return data
}

export const updateCandidateStatus = async (candidateId: number, status: string) => {
  const response = await fetch(`http://localhost:4000/api/candidates/${candidateId}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  })
  return response.json()
}

