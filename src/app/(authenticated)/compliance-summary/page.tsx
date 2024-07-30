'use client'

import { Typography, Row, Col, Card, Statistic, Spin } from 'antd'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  PercentageOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ComplianceSummaryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: complianceSummary,
    isLoading,
    refetch,
  } = Api.complianceSummary.findUnique.useQuery({
    where: { id: params.id },
    include: { logFile: true },
  })

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!complianceSummary) {
    enqueueSnackbar('Compliance summary not found', { variant: 'error' })
    router.push('/home')
    return null
  }

  const {
    totalRequirements,
    metRequirements,
    notMetRequirements,
    partiallyMetRequirements,
    complianceScore,
  } = complianceSummary

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Compliance Status Summary</Title>
      <Text>
        Understand the total number of requirements tested, met, not met, and
        partially met.
      </Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Requirements"
              value={totalRequirements.toString()}
              prefix={<PercentageOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Met Requirements"
              value={metRequirements.toString()}
              prefix={<CheckCircleOutlined style={{ color: 'green' }} />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Not Met Requirements"
              value={notMetRequirements.toString()}
              prefix={<CloseCircleOutlined style={{ color: 'red' }} />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Partially Met Requirements"
              value={partiallyMetRequirements.toString()}
              prefix={<ExclamationCircleOutlined style={{ color: 'orange' }} />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24}>
          <Card>
            <Statistic
              title="Compliance Score"
              value={complianceScore.toString()}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
