#!/usr/bin/env python3
"""Module qui définit task_wait_random, qui retourne une tâche asyncio."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Retourne une tâche asyncio qui attend wait_random(max_delay).
    """
    return asyncio.create_task(wait_random(max_delay))
