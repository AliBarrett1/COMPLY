'use client'

import { Prisma } from '@prisma/client'
import { Typography, Spin, Card, Row, Col } from 'antd'
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  BulbOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AnalysisResultsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: analysisResults,
    isLoading,
    refetch,
  } = Api.analysisResult.findMany.useQuery({
    where: { logFileId: params.logFileId },
    include: { requirement: true },
  })

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Requirement Analysis</Title>
      <Paragraph>
        View the detailed analysis of each requirement to understand if the
        requirement is met or not. You can also see relevant information from
        the log files, identified issues, and suggested improvements for each
        requirement.
      </Paragraph>
      <Row gutter={[16, 16]}>
        {analysisResults?.map(result => (
          <Col xs={24} sm={12} md={8} lg={6} key={result.id}>
            <Card title={result.requirement?.description} bordered={true}>
              <Paragraph>
                <CheckCircleOutlined
                  style={{ color: result.status === 'met' ? 'green' : 'gray' }}
                />{' '}
                Status: {result.status}
              </Paragraph>
              <Paragraph>
                <InfoCircleOutlined style={{ color: 'blue' }} /> Relevant
                Information: {result.relevantInfo || 'N/A'}
              </Paragraph>
              <Paragraph>
                <WarningOutlined style={{ color: 'red' }} /> Identified Issues:{' '}
                {result.identifiedIssues || 'N/A'}
              </Paragraph>
              <Paragraph>
                <BulbOutlined style={{ color: 'orange' }} /> Suggested
                Improvements: {result.suggestedImprovements || 'N/A'}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
