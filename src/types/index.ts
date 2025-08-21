export interface AnalysisResult {
  confidence: number
  isAIGenerated: boolean
  detectionMethods: string[]
  technicalDetails: {
    resolution: string
    format: string
    size: string
    duration?: string
  }
  riskFactors: string[]
}
