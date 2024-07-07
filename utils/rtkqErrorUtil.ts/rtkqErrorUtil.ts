import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
    return typeof error === 'object' && error != null && 'status' in error;
};

export const isErrorWithDetail = (
    error: unknown,
): error is {
    data: {
        detail: {
            message: string;
            code: number;
        };
    };
} => {
    return (
        typeof error === 'object' &&
        error != null &&
        'data' in error &&
        typeof error.data === 'object' &&
        error.data != null &&
        'detail' in error.data &&
        typeof error.data.detail === 'object' &&
        error.data.detail != null &&
        'message' in error.data.detail &&
        typeof error.data.detail.message === 'string' &&
        'code' in error.data.detail &&
        typeof error.data.detail.code === 'number'
    );
};

export const getMessageFromError = (error: unknown, defaultText?: string): string => {
    if (isErrorWithDetail(error)) {
        return error.data.detail.message;
    }
    if (isFetchBaseQueryError(error)) {
        return error.status.toString();
    }

    return defaultText ?? 'Error';
};
