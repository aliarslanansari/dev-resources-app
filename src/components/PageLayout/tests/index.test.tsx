import { render } from '@testing-library/react'
import PageLayout from '../index'

describe('<PageLayout />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = render(
      <PageLayout>
        <h1>Hello</h1>
      </PageLayout>
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('should contain 1 PageLayout component', () => {
    const { getAllByTestId } = render(
      <PageLayout>
        <h1>Hello</h1>
      </PageLayout>
    )
    expect(getAllByTestId('pageLayout').length).toBe(1)
  })
})
