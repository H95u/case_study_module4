package com.example.cs.service;

import com.example.cs.model.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ISongService extends IGeneralService<Song, Long> {
    Page<Song> findByPage(Pageable pageable);
}
