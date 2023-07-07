package com.example.cs.service.impl;

import com.example.cs.model.SongPlaylist;
import com.example.cs.repository.ISongPlaylistRepository;
import com.example.cs.service.ISongPlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SongPlaylistService implements ISongPlaylistService {

    @Autowired
    private ISongPlaylistRepository iSongPlaylistRepository;

    @Override
    public List<SongPlaylist> findAll() {
        return iSongPlaylistRepository.findAll();
    }

    @Override
    public Optional<SongPlaylist> findOne(Long aLong) {
        return iSongPlaylistRepository.findById(aLong);
    }

    @Override
    public void save(SongPlaylist songPlaylist) {
        iSongPlaylistRepository.save(songPlaylist);
    }

    @Override
    public void delete(Long aLong) {
        iSongPlaylistRepository.deleteById(aLong);
    }

    @Override
    public Page<SongPlaylist> findByPage(Pageable pageable) {
        return iSongPlaylistRepository.findAll(pageable);
    }
}
