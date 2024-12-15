import { api } from ".";

const getCourse = api.injectEndpoints({
    endpoints: (build) => ({
        getCourse: build.query<any, void>({
            query : () => ({
                url: "/"
            }),
            providesTags: ["Exchange"]
        })
    })
})

export const { useGetCourseQuery } = getCourse